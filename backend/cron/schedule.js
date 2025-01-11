import { scheduledFunction } from "../controllers/post.controller.js"; 
import cron from "node-cron";

const scheduleTask = (post) => {
    const taskDate = new Date(post.dateTime);
    const cronExpression = `${taskDate.getMinutes()} ${taskDate.getHours()} ${taskDate.getDate()} ${taskDate.getMonth() + 1} *`;
   
    cron.schedule(cronExpression,()=> scheduledFunction(post));
  };


  export { scheduleTask };

