import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { scheduleTask } from "../cron/schedule.js"; 

const scheduledFunction  = async(post) => {
    try {
        const puppeteerVar = require('puppeteer')

        const browser = await puppeteerVar.launch({headless:false})
        const page = await browser.newPage()
        await page.goto('https://uppy.io/examples/xhrupload/')
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('.uppy-FileInput-btn')
        ])
        await fileChooser.accept(['C:\\Users\\Azhar\\Desktop\\Puppeteer Project\\FileUpload.png'])
        await page.waitForTimeout(6000)
        await browser.close();

      } 
      catch (error) {
        
      }
  }


const createPost = async (req, res) => {
    const { title, description, image, dateTime } = req.body;
  
    if (!title || !description || !dateTime) {
      return res.status(400).json({ error: 'Title, Description, and DateTime are required' });
    }
  
    try {
      const newPost = new Post({
        title,
        description,
        image,
        dateTime,
      });
  
      await newPost.save();
  
      scheduleTask(newPost);
  
      res.status(200).json({ message: `Post scheduled for ${dateTime}`, post: newPost });
    } catch (error) {
      console.error('Error scheduling post:', error);
      res.status(500).json({ error: 'Failed to schedule post' });
    }
  };



export { createPost, scheduledFunction };