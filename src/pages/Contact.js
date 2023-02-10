import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import ContactImg from '../img/contact/contact.png'
import { useContext, useRef } from 'react';
import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { mouseEnterHandle, mouseLeaveHandle } =  useContext(CursorContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qe5z91m', 'template_1tjt5xo', form.current, 'u_nHF1VV5LAZHBJgW')
    .then((result) => {
        console.log(result.text);
        console.log('message send')
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <motion.section
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      exit={{opacity:0}}
      transition={transition1}
      className="section bg-white">

      <div className='container mx-auto h-full'>

        <div className='flex flex-col lg:flex-row 
          h-full items-center justify-start pt-36 
          gap-x-8 text-center lg:text-left'>

            {/* bg */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={transition1}
              className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
            </motion.div>

              {/* text & form */}
              <div 
                onMouseEnter={ mouseEnterHandle }
                onMouseLeave={ mouseLeaveHandle }
                className='lg:flex-1 lg:pt-32 px-4'>
                <h1 className='h1'>Contact me</h1>

                <form ref={form}  onSubmit={sendEmail} 
                  className='flex flex-col gap-y-4'>
                  <div className='flex gap-x-10'>
                  <input 
                      className='outline-none border-b
                      border-b-primary h-[60px] bg-transparent
                      font-secondary w-full pl-3 
                      placeholder:text-[#757879]' 
                      type='text'
                      name='user_name'
                      placeholder='Tú nombre'
                      required
                    />
                    <input 
                      className='outline-none border-b
                      border-b-primary h-[60px] bg-transparent
                      font-secondary w-full pl-3 
                      placeholder:text-[#757879]' 
                      type='email'
                      name='user_email'
                      placeholder='Tú email'
                      required
                    />
                  </div>
                  <input 
                      className='outline-none border-b
                      border-b-primary h-[60px] bg-transparent
                      font-secondary w-full pl-3 
                      placeholder:text-[#757879]' 
                      type='text'
                      name='message'
                      placeholder='Cuentame un poco sobre tu proyecto'
                      required
                    />
                  <button type='submit' value='Send' 
                    className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                    Enviar
                  </button>
                </form>
              </div>

              {/* img */}
              <motion.div
                onMouseEnter={ mouseEnterHandle }
                onMouseLeave={ mouseLeaveHandle }
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{transition:transition1, duration: 1.5}}
                className='lg:flex-1'>
                <img src={ContactImg} alt=' contact img'/>
              </motion.div>
          </div>
        </div>

    </motion.section>
  );
};

export default Contact;
