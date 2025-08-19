import Brain from "@/components/Brain";
import { Award, BookOpen } from "lucide-react";
import { useScroll } from "motion/react";
import { useRef } from "react";

   const coursework = [
      "Data Structures and Algorithms",
      "Software Engineering Principles",
      "Database Management Systems",
      "Web Development Technologies",
      "Object-Oriented Programming",
      "Computer Networks and Security",
    ]
const Education = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start']
    });
   console.log(scrollYProgress);
  return (
    <section className='w-full'>
      <section className='c-space section-spacing' id='education' ref={containerRef}>
        <h2 className='text-heading'>Education</h2>
        <h3 className='subtext'>
          My academic journey has provided me with a strong foundation in computer science principles, practical
          programming skills, and leadership experience that continues to drive my professional growth.
        </h3>
        <div ref={ref} className='relative pb-20'>
          <div className='flex justify-start pt-10 md:pt-40 md:gap-10'>
            <div className='sticky z-1 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-2xl md:w-full'>
              <div className='flex-col gap-2 text-xl font-bold md:flex md:text-4xl text-neutral-300'>
                <h3> Sept 2020 – Sept 2024</h3>
                <h3 className='text-3xl text-neutral-400'>Bachelor of Science in Computer Science</h3>
                <h3 className='text-3xl text-neutral-500'>Hanoi University Of Science And Technology (HUST)</h3>
                <div className='flex items-center gap-4 font-normal text-neutral-400 text-xl mt-2'>
                  <span>Hanoi, VietNam</span>
                  <span>•</span>
                  <span className='font-medium'>CPA: 3.38/4</span>
                  <span>•</span>
                  <span className='font-medium'>TOEIC: 515</span>
                </div>
                <div className='mb-6 text-xl text-neutral-400 mt-2'>
                  <h4 className='text-neutral-400 font-semibold mb-3 flex items-center gap-2'>
                    <BookOpen className='w-4 h-4 text-green-400' />
                    Relevant Coursework
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {coursework.map((course, idx) => (
                      <div key={idx} className=' text-[18px] text-neutral-400'>
                        • {course}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mb-6 text-xl text-neutral-400 mt-2'>
                  <h4 className='text-neutral-400 font-semibold mb-3 flex items-center gap-2'>
                    <Award className='w-4 h-4 text-blue-400' />
                    Key Achievements
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    <div className=' text-[18px] text-neutral-400'>
                      • Bachelor of Science in Computer Science, Class of 2024 – Graduated with Good standing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' hidden h-full w-full lg:block absolute top-20 right-[-50%] z-1'>
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Education