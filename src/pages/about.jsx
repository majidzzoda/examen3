import React from 'react'
import phone from '../assets/iPhone.png'
import clients from '../assets/Clients.png'
import pic2 from '../assets/pic — копия.png'
import icOp from '../assets/ic-chart.png'
import icOp1 from '../assets/ic-computer.png'
import icOp2 from '../assets/ic-options.png'
import icOp3 from '../assets/ic-speaker.png'
import icOp4 from '../assets/ic-analysis.png'
import icOp5 from '../assets/ic-target.png'
import line from '../assets/line.png'
import Card from '../components/card'
import third from '../assets/Cross.png'
import mark from '../assets/Mark.png'
import SwiperWithButtons from '../components/swiper'
import sub from '../assets/sub.png'


const About = () => {
  return (
    <main className='pt-[150px] p-[20px] lg:px-[75px] dark:bg-gray-950 bg-gray-200 dark:text-white transition-all duration-500'>
      <section className='flex flex-col gap-[30px] text-center items-center justify-center'>
        <h1 className='font-[900] text-[30px] lg:text-[72px]'>Search Engine Optimization</h1>
        <p className='lg:w-[810px] lg:text-[20px]'>Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. </p>
        <div className='flex items-center gap-[20px]'>
          <button className='border p-[5px] border-[#FFFFFF] lg:w-[154px] lg:h-[52px] dark:bg-gray-900 transition-all duration-500 rounded-[4px] bg-white'>Start now</button>
          <button className='flex items-center gap-[10px]'>
            <img src={phone} alt="" />
            <div className='flex flex-col items-start gap-[5px]'>
              <b>Call us</b>
              <span>(405) 555-0128</span>
            </div>
          </button>
        </div>
        <div className='flex flex-col w-full lg:justify-center gap-[10px] lg:flex-row'>
          <input type="text" placeholder='http://yoursite.com' className='lg:w-[600px] text-[10px] lg:text-[18px] bg-gray-300 dark:bg-[#FFFFFF33] transition-all duration-500 p-[10px] rounded-[4px] border border-[#FFFFFF1F]' />
          <button className='bg-[#7772F1] lg:w-[199px] text-[10px] lg:text-[18px] rounded-[4px] p-[10px] text-white'>Analyse your site</button>
        </div>
      </section>
      <section className='py-[50px] lg:py-[150px]'>
        <img src={clients} alt="" />
      </section>
      <section className='flex lg:items-center justify-between lg:flex-row flex-col gap-[30px]'>
        <aside>
          <img className='lg:w-[705px] lg:h-[560px]' src={pic2} alt="" />
        </aside>
        <aside className='lg:w-[390px]'>
          <h1 className='font-[900] text-[30px] lg:text-[46px]'>We go above and beyond to ensure successful SEO</h1>
          <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
        </aside>
      </section>
      <section className='pt-[50px] lg:pt-[150px]'>
        <h1 className='font-[900] text-center lg:text-[46px] text-[25px]'>SEO services include</h1>
        <div className='flex lg:flex-wrap lg:flex-row flex-col justify-center gap-[40px] lg:gap-[100px] mt-[50px]'>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp} alt="" />
            <b className='text-[20px]'>SEO Strategy</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp1} alt="" />
            <b className='text-[20px]'>Competitor Analysis</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp2} alt="" />
            <b className='text-[20px]'>Technical Audit</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp3} alt="" />
            <b className='text-[20px]'>Content Strategy</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp4} alt="" />
            <b className='text-[20px]'>Media Promotion</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
          <article className='flex flex-col gap-[10px] items-start lg:w-[285px]'>
            <img src={icOp5} alt="" />
            <b className='text-[20px]'>SEO Reports</b>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </article>
        </div>
      </section>
      <section className='pt-[50px] lg:pt-[150px]'>
        <div className='bg-[#7772F1] text-center p-[20px] rounded-[4px] lg:h-[243px] flex flex-col justify-evenly'>
          <h1 className='text-white font-[900] lg:text-[32px] text-[20px]'>Get a Free SEO Analysis!</h1>
          <div className='flex gap-[10px] lg:flex-row flex-col lg:justify-center'>
            <input type="text" placeholder='Your name' className='lg:w-[280px] bg-white p-[10px] text-[10px] lg:text-[18px] transition-all duration-500 rounded-[4px] border border-[#FFFFFF1F]' />
            <input type="text" placeholder='Your working email' className='lg:w-[280px] bg-white text-[10px] lg:text-[18px] transition-all duration-500 p-[10px] rounded-[4px] border border-[#FFFFFF1F]' />
            <input type="text" placeholder='http://yoursite.com' className='lg:w-[280px] bg-white text-[10px] lg:text-[18px] transition-all duration-500 p-[10px] rounded-[4px] border border-[#FFFFFF1F]' />
            <button className='bg-black lg:w-[199px] text-[10px] lg:text-[18px] rounded-[4px] p-[10px] text-white'>Analyse your site</button>
          </div>
        </div>
      </section>
      <section className='pt-[50px] lg:pt-[150px]'>
        <h1 className='text-[25px] lg:text-[46px] font-[900] mb-[5px] lg:mb-[50px] text-center'>That’s how it works</h1>
        <div className='flex justify-evenly gap-[20px] items-center'>
          <aside className='flex flex-col gap-[80px] mt-[100px]'>
            <div className='lg:w-[400px] lg:h-[162px] flex flex-col gap-[5px] items-end text-end'>
              <span className='text-[12px] font-[900]'>Step 2</span>
              <b className='text-[20px] font-[700]'>Technical SEO Optimizations</b>
              <p className='text-[16px] font-[400]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
            </div>
            <div className='lg:w-[400px] lg:h-[162px] flex flex-col gap-[5px] items-end text-end'>
              <span className='text-[12px] font-[900]'>Step 4</span>
              <b className='text-[20px] font-[700]'>Content Marketing</b>
              <p className='text-[16px] font-[400]'>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</p>
            </div>
          </aside>
          <aside className='lg:flex hidden'>
            <img src={line} alt="" />
          </aside>
          <aside className='flex flex-col gap-[80px] mt-[-100px]'>
            <div className='lg:w-[400px] lg:h-[162px] flex flex-col gap-[5px] items-start text-start'>
              <span className='text-[12px] font-[900]'>Step 1</span>
              <b className='text-[20px] font-[700]'>Off-Site SEO Analysis</b>
              <p className='text-[16px] font-[400]'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
            </div>
            <div className='lg:w-[400px] lg:h-[162px] flex flex-col gap-[5px] items-start text-start'>
              <span className='text-[12px] font-[900]'>Step 3</span>
              <b className='text-[20px] font-[700]'>Usability Check</b>
              <p className='text-[16px] font-[400]'>Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. </p>
            </div>
          </aside>
        </div>
      </section>
      <section className='my-[50px] lg:my-[150px]'>
        <h1 className='font-[900] lg:text-[46px] text-[25px] text-center'>Flexible pricing plans</h1>
        <div className='flex flex-col lg:flex-row gap-[5px] mt-[20px] justify-center'>
          <button className='bg-[#7772F1] text-white lg:w-[210px] lg:h-[46px] rounded-[40px] px-[20px] py-[5px]'>Monthly</button>
          <button className='border lg:ml-[-40px] border-[#7772F1] text-[#7772F1] lg:w-[210px] lg:h-[46px] rounded-[40px] px-[20px] py-[5px]'>
            <b>Yearly</b>
            <b className='text-[12px]'> -12% Off</b>
          </button>
        </div>
        <div className='flex items-center gap-[40px] justify-evenly my-[50px] flex-col lg:flex-row'>
          <Card textColor="#7772F1" btnColor="#7772F1" color="whitesmoke" first={"Basic"} second={"$24"} third={third} fourth={third} />
          <Card textColor="#146159" btnColor='white' bgBtn="#7772F1" color="#1E212C" third={mark} fourth={third} />
          <Card textColor="#7772F1" btnColor="#7772F1" color="whitesmoke" third={mark} fourth={mark} />
        </div>
      </section>
      <section>
        <SwiperWithButtons />
        <div className='flex items-center gap-[20px] lg:flex-row flex-col text-center mt-[50px] justify-center'>
          <h1 className='text-[28px] font-[700]'>Explore more case studies</h1>
          <button className='bg-[#7772F1] lg:w-[185px] lg:h-[44px] p-[5px] rounded-[4px] text-white'>View all case studies</button>
        </div>
      </section>
      <section className='flex flex-col py-[50px] lg:py-[150px] gap-[40px]'>
        <h1 className='text-center font-[900] lg:text-[46px] text-[25px]'>Other services</h1>
        <div className='flex items-center lg:text-[18px] gap-[5px] text-[8px] justify-between'>
          <button className='border border-[#7772F1] text-[#7772F1] rounded-[4px] px-[10px] lg:w-[246px] lg:h-[46px] py-[10px]'>Social Media</button>
          <button>SEO</button>
          <button>Research</button>
          <button>Content & PR</button>
          <button>Payed Traffic</button>
        </div>
        <div className='flex items-center lg:flex-row flex-col gap-[40px] justify-between mt-[50px]'>
          <aside className='flex flex-col gap-[40px]'>
            <h1 className='text-[28px] font-[700]'>Complete Worflow For Any SEO Professional</h1>
            <div className='flex flex-col gap-[20px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Aenean enim tellus morbi nisl vulputate dictumst.</b>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Nibh sapien volutpat lacus augue.</b>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Vel in amet, placerat adipiscing est pharetra.</b>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Gravida ornare sit in et ut sit sem id.</b>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Ultrices pellentesque dictum enim egestas ac diam.</b>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={mark} alt="" />
                <b>Sit semper enim senectus integer ut turpis et.</b>
              </div>
            </div>
            <div className='flex items-center gap-[20px]'>
              <button className='border lg:w-[140px] lg:h-[44px] rounded-[4px] p-[5px] border-[#7772F1] text-[#7772F1]'>Learn more</button>
              <button className='bg-[#7772F1] text-white lg:w-[166px] p-[5px] lg:h-[44px] rounded-[4px]'>Try SEO toolkit</button>
            </div>
          </aside>
          <aside>
            <img src={sub} alt="" />
          </aside>
        </div>
      </section>
    </main>
  )
}

export default About