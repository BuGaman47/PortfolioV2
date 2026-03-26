import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picP1 from '../assets/01.png'
import picP2 from '../assets/02.png'
import picP3 from '../assets/03.png'
export const data = [
    {
        date: "2025",
        title: "Fullstack · Meeting-Room Booking System",
        materials: [
            { type: faGithub, link: "https://github.com/BuGaman47/Project.git" }
        ],
        descriptions: [
            "เว็บแอปพลิเคชันสำหรับจองห้องประชุมที่มีฟีเจอร์การจัดการห้องประชุม การจอง และการยกเลิกการจอง โดยใช้ React สำหรับ Frontend และ Node.js",
            "สารถเลือกห้องและจำนวนผู้เข้าร่วมประชุมและได้ตามต้องการ "
        ],
        skills: [
            ["HTML", "CSS", "JavaScript", "Tailwind CSS"], ["daisyUI", "React", "Vite", "Git"],
        ],
        picture: picP2,
    },
   {
        date: "2026",
        title: "Frontend · IOT Web Application",
        materials: [
          { type: faGithub, link: "https://github.com/BuGaman47/Appcontrol-Final_Project.git" },
        ],
        descriptions: [
          "เป็นเว็บแอปพลิเคชันสำหรับการจัดการและควบคุมอุปกรณ์ IoT โดยใช้ React และ Tailwind CSS ในการพัฒนา Frontend และเชื่อมต่อกับระบบหลังบ้านเพื่อดึงข้อมูลและแสดงผลให้ผู้ใช้งานได้อย่างมีประสิทธิภาพ"
        ],
        skills: [
          ["React.js", "Vite","Git"],
          ["Tailwind CSS", "daisyUI"],
          ["Component-based Architecture"],
          ["Responsive Web Design"],
        ],
        picture: picP3,
},
{
  date: "2026",
        title: "Frontend · ระบบติดตามการดำเนินงานของนิสิต Web Application",
        materials: [
          { type: faGithub, link: "https://github.com/BuGaman47/project_fiveper.git" },
        ],
        descriptions: [
          "เป็นระบบติดตามความคืบหน้างานและโปรเจ็คของนิสิต โดยใช้ React และ Tailwind CSS ในการพัฒนา Frontend และเชื่อมต่อกับระบบหลังบ้านเพื่อดึงข้อมูลและแสดงผลให้ผู้ใช้งานได้อย่างมีประสิทธิภาพ"
        ],
        skills: [
          ["React.js", "Vite","Git"],
          ["Tailwind CSS", "daisyUI"],
          ["Component-based Architecture"],
          ["Responsive Web Design"],
        ],
        picture: picP1,
}
]