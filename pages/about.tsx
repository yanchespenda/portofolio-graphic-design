import { Fragment } from "react"
import Head from 'next/head'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import styles from '../styles/Home.module.css'

export default function About() {

  return (
    <Fragment>
      <div className={styles.container}>
        <Head>
          <title>About</title>
        </Head>

        <main className="xl:container mt-8">

          <div className="flex flex-col">
            <div className="w-full mx-16">
              <div className="flex flex-row items-center justify-center">

                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col">
                    {/* Initial Name */}
                    <span className="text-6xl"><span className="text-[#9E8B7A]">Zacky Hilmi.</span></span>
                    {/* End Initial Name */}

                    {/* Summary */}
                    <span className="text-2xl max-w-[400px] mt-2">User Interface Designer Based in Indonesia</span>
                    {/* End Summary */}

                    {/* Intro */}
                    <div className="whitespace-pre-line break-words mt-4">
                      <p className="text-lg max-w-[400px]">HI,<br />
What is the point of having all these smart home devices when they don’t talk to one another? That’s where Belkin Sense comes in! A device that not only connects all your smart home controls into one app but also suggests ways for them to work with another to suits your needs….. Think of it as Alfred to your inner Bruce Wayne.
                      </p>
                    </div>
                    
                    {/* End Intro */}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center justify-center relative">
                  <LazyLoadImage
                    className="w-full z-[1]"
                    wrapperClassName="w-full h-full"
                    alt={'About profile'}
                    effect="opacity"
                    src={'/images/about.jpg'} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex-col mt-16">
              <div className="text-center mb-8">
                <span className="text-5xl">What i <span className="text-[#9E8B7A]">offer.</span></span>
              </div>
              <div className="flex flex-row items-center space-x-6 max-h-36">
                <div className="w-full lg:w-1/3 h-full">
                  <div className="max-w py-4 px-8 bg-[#9E8B7A] bg-opacity-30 shadow-lg rounded-2xl flex flex-row">
                    <div className="p-8 bg-[#9E8B7A] rounded-2xl h-32">
                      <svg width="64" height="64" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M82.1306 77.1074H54.6082C51.923 77.1074 49.739 79.3259 49.739 82.0537C49.739 84.7866 51.923 87 54.6082 87H82.1306C84.8158 87 86.9998 84.7866 86.9998 82.0537C86.9998 79.3259 84.8158 77.1074 82.1306 77.1074Z" fill="white"/>
                        <path d="M35.3269 18.8686L61.4069 39.9424C62.0361 40.4464 62.1435 41.3712 61.6524 42.0155L30.7339 82.303C28.7903 84.7917 25.9261 86.1997 22.8572 86.2517L5.97864 86.4596C5.07845 86.4699 4.29078 85.8464 4.08619 84.9528L0.250148 68.2746C-0.414767 65.2091 0.250148 62.0397 2.19374 59.5977L33.2657 19.118C33.767 18.4685 34.6927 18.3542 35.3269 18.8686Z" fill="white"/>
                        <path opacity="0.4" d="M73.0827 27.383L68.0549 33.6594C67.5486 34.2984 66.6382 34.4023 66.0091 33.8932C59.897 28.9469 44.2459 16.2538 39.9035 12.7363C39.2693 12.2167 39.1823 11.2919 39.6938 10.6476L44.5426 4.62578C48.9412 -1.03754 56.6133 -1.55711 62.8021 3.37881L69.9116 9.04212C72.827 11.3282 74.7706 14.3417 75.4355 17.5111C76.2027 20.9974 75.3843 24.4214 73.0827 27.383Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center h-32 w-full">
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-2xl">UI / UX</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-xl">Lorem Ipsum</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 h-full">
                  <div className="max-w py-4 px-8 bg-[#9E8B7A] bg-opacity-30 shadow-lg rounded-2xl my-20 flex flex-row">
                    <div className="p-8 bg-[#9E8B7A] rounded-2xl h-32">
                      <svg width="64" height="64" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M82.1306 77.1074H54.6082C51.923 77.1074 49.739 79.3259 49.739 82.0537C49.739 84.7866 51.923 87 54.6082 87H82.1306C84.8158 87 86.9998 84.7866 86.9998 82.0537C86.9998 79.3259 84.8158 77.1074 82.1306 77.1074Z" fill="white"/>
                        <path d="M35.3269 18.8686L61.4069 39.9424C62.0361 40.4464 62.1435 41.3712 61.6524 42.0155L30.7339 82.303C28.7903 84.7917 25.9261 86.1997 22.8572 86.2517L5.97864 86.4596C5.07845 86.4699 4.29078 85.8464 4.08619 84.9528L0.250148 68.2746C-0.414767 65.2091 0.250148 62.0397 2.19374 59.5977L33.2657 19.118C33.767 18.4685 34.6927 18.3542 35.3269 18.8686Z" fill="white"/>
                        <path opacity="0.4" d="M73.0827 27.383L68.0549 33.6594C67.5486 34.2984 66.6382 34.4023 66.0091 33.8932C59.897 28.9469 44.2459 16.2538 39.9035 12.7363C39.2693 12.2167 39.1823 11.2919 39.6938 10.6476L44.5426 4.62578C48.9412 -1.03754 56.6133 -1.55711 62.8021 3.37881L69.9116 9.04212C72.827 11.3282 74.7706 14.3417 75.4355 17.5111C76.2027 20.9974 75.3843 24.4214 73.0827 27.383Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center h-32 w-full">
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-2xl">Illustration</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-xl">Lorem Ipsum</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 h-full">
                  <div className="max-w py-4 px-8 bg-[#9E8B7A] bg-opacity-30 shadow-lg rounded-2xl my-20 flex flex-row">
                    <div className="p-8 bg-[#9E8B7A] rounded-2xl h-32">
                      <svg width="64" height="64" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M82.1306 77.1074H54.6082C51.923 77.1074 49.739 79.3259 49.739 82.0537C49.739 84.7866 51.923 87 54.6082 87H82.1306C84.8158 87 86.9998 84.7866 86.9998 82.0537C86.9998 79.3259 84.8158 77.1074 82.1306 77.1074Z" fill="white"/>
                        <path d="M35.3269 18.8686L61.4069 39.9424C62.0361 40.4464 62.1435 41.3712 61.6524 42.0155L30.7339 82.303C28.7903 84.7917 25.9261 86.1997 22.8572 86.2517L5.97864 86.4596C5.07845 86.4699 4.29078 85.8464 4.08619 84.9528L0.250148 68.2746C-0.414767 65.2091 0.250148 62.0397 2.19374 59.5977L33.2657 19.118C33.767 18.4685 34.6927 18.3542 35.3269 18.8686Z" fill="white"/>
                        <path opacity="0.4" d="M73.0827 27.383L68.0549 33.6594C67.5486 34.2984 66.6382 34.4023 66.0091 33.8932C59.897 28.9469 44.2459 16.2538 39.9035 12.7363C39.2693 12.2167 39.1823 11.2919 39.6938 10.6476L44.5426 4.62578C48.9412 -1.03754 56.6133 -1.55711 62.8021 3.37881L69.9116 9.04212C72.827 11.3282 74.7706 14.3417 75.4355 17.5111C76.2027 20.9974 75.3843 24.4214 73.0827 27.383Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center h-32 w-full">
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-2xl">Visual Identity</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-[#9E8B7A] text-left text-xl">Lorem Ipsum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex-col mt-16">
              <div className="text-center mb-8">
                <span className="text-5xl">Education & <br /> <span className="text-[#9E8B7A]">Experience. </span></span>
              </div>

              <div className="flex flex-row items-center space-x-6">
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col mx-auto p-2 text-blue-50">
                    <div className="flex md:contents">
                      <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-[#9E8B7A] pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#9E8B7A] shadow"></div>
                      </div>
                      <div className="bg-[#9E8B7A] col-start-3 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md">
                        <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                        <p className="leading-tight text-justify">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Vitae, facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

        </main>

        <div className="flex-1 flex-col mt-16 bg-[#9E8B7A] bg-opacity-30 w-full">
          <div className="xl:container mt-8 mx-auto">
            <div className="text-center py-8">
              <span className="text-5xl">Get in <span className="text-[#9E8B7A]">Touch. </span></span><br />
              <span className="text-lg">Lorem Ipsum</span>
            </div>

            <div className="flex flex-row items-center justify-center text-center pb-16 space-x-32">
              <a href="#!">
                <svg width="52" height="47" viewBox="0 0 52 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M51.7678 33.4953C51.7678 40.7169 45.9698 46.5666 38.7482 46.5925H38.7223H13.0714C5.87564 46.5925 0 40.7687 0 33.5471V33.5212C0 33.5212 0.0155303 22.065 0.0362374 16.3032C0.0388258 15.2213 1.28125 14.6156 2.12766 15.2886C8.27767 20.1677 19.2757 29.064 19.4129 29.1804C21.2507 30.6532 23.5802 31.4841 25.9615 31.4841C28.3428 31.4841 30.6724 30.6532 32.5102 29.152C32.6473 29.0614 43.3995 20.4317 49.6427 15.4723C50.4917 14.7968 51.7393 15.4024 51.7419 16.4818C51.7678 22.1996 51.7678 33.4953 51.7678 33.4953Z" fill="#9E8B7A"/>
                  <path d="M50.4119 6.92135C48.1703 2.6971 43.7597 0 38.9039 0H13.0718C8.21596 0 3.80534 2.6971 1.5638 6.92135C1.06165 7.86611 1.29978 9.04383 2.13583 9.71163L21.3546 25.0841C22.7006 26.1712 24.3313 26.7122 25.9619 26.7122C25.9723 26.7122 25.9801 26.7122 25.9878 26.7122C25.9956 26.7122 26.0059 26.7122 26.0137 26.7122C27.6444 26.7122 29.2751 26.1712 30.621 25.0841L49.8398 9.71163C50.6759 9.04383 50.914 7.86611 50.4119 6.92135Z" fill="#9E8B7A"/>
                </svg>
              </a>
              <a href="#!">
                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1901 0C4.58632 0 0 4.49802 0 9.99409V41.0075C0 46.5035 4.58622 51 10.1901 51H41.8116C47.4154 51 52 46.5036 52 41.0075V9.99409C52 4.49813 47.4154 0 41.8116 0H10.1901ZM12.753 8.41603C15.4399 8.41603 17.0949 10.146 17.146 12.42C17.146 14.6438 15.4398 16.4224 12.701 16.4224H12.6506C10.0149 16.4224 8.31131 14.6439 8.31131 12.42C8.31131 10.146 10.0665 8.41603 12.753 8.41603H12.753ZM35.9073 19.0445C41.0746 19.0445 44.9483 22.3569 44.9483 29.4753V42.764H37.0953V30.3662C37.0953 27.2508 35.9588 25.1253 33.1168 25.1253C30.9473 25.1253 29.6541 26.5579 29.0863 27.9419C28.8789 28.437 28.8279 29.1285 28.8279 29.8211V42.764H20.9749C20.9749 42.764 21.078 21.7625 20.9749 19.588H28.8295V22.8699C29.8731 21.2908 31.7398 19.0444 35.9073 19.0444V19.0445ZM8.77452 19.5897H16.6275V42.7641H8.77452V19.5897Z" fill="#9E8B7A"/>
                </svg>
              </a>
              <a href="#!">
                <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.5 0C11.8698 0 0 11.4219 0 25.5C0 39.5781 11.8698 51 26.5 51C41.1015 51 53 39.5781 53 25.5C53 11.4219 41.1015 0 26.5 0ZM44.0033 11.7534C47.266 15.577 49.0715 20.3594 49.12 25.3066C48.3735 25.1685 40.9005 23.7022 33.3701 24.616C33.1957 24.2547 33.0521 23.868 32.8799 23.4813C32.4115 22.4175 31.9137 21.3659 31.387 20.3277C39.7213 17.0637 43.5152 12.3633 44.0033 11.7534ZM26.5 3.76338C32.2483 3.76338 37.5085 5.83525 41.5034 9.23738C41.1015 9.78988 37.6808 14.1886 29.6336 17.0914C25.9236 10.5379 21.8161 5.17013 21.1823 4.34137C22.9254 3.94971 24.71 3.75502 26.5 3.76125V3.76338ZM16.8717 5.80763C17.4745 6.58325 21.4981 11.9765 25.2633 18.3919C14.6854 21.1034 5.34417 21.0481 4.33938 21.0481C5.80571 14.2991 10.5492 8.68488 16.8717 5.80763ZM3.85133 25.5276V24.8646C4.82962 24.8923 15.8072 25.0304 27.1051 21.7664C27.7654 22.984 28.3682 24.2271 28.9424 25.4724C28.6553 25.5553 28.3395 25.6381 28.0525 25.721C16.3836 29.3441 10.1738 39.2445 9.65704 40.0754C5.91924 36.0836 3.85089 30.9008 3.85133 25.5276ZM26.5 47.294C21.2685 47.294 16.441 45.5791 12.6184 42.704C13.0203 41.9008 17.6181 33.3816 30.38 29.0955C30.4375 29.0679 30.4684 29.0679 30.5236 29.0403C33.7146 36.9771 35.0065 43.6433 35.3532 45.5515C32.6215 46.6863 29.6336 47.294 26.5 47.294ZM39.1184 43.5604C38.8888 42.2323 37.6808 35.8721 34.7194 28.0436C41.8192 26.9662 48.0268 28.7364 48.8042 28.985C47.8259 35.0413 44.2042 40.2687 39.1184 43.5604Z" fill="#9E8B7A"/>
                </svg>
              </a>
              <a href="#!">
                <svg width="52" height="33" viewBox="0 0 52 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1258 0C16.624 0 18.0086 0.113752 19.2793 0.455008C20.5468 0.682512 21.5901 1.15702 22.5164 1.72578C23.4459 2.29779 24.1317 3.1103 24.5997 4.15357C25.0547 5.19359 25.3017 6.46436 25.3017 7.84888C25.3017 9.46091 24.9572 10.8454 24.1447 11.8855C23.4459 12.9255 22.3051 13.855 20.9044 14.5407C22.8739 15.1128 24.3722 16.1528 25.2854 17.5373C26.1987 18.9218 26.7837 20.6476 26.7837 22.6171C26.7837 24.2292 26.4424 25.6137 25.8574 26.7707C25.2738 27.9353 24.3981 28.9286 23.3159 29.6535C22.2759 30.3523 21.0051 30.921 19.6206 31.2655C18.2643 31.6237 16.8696 31.8158 15.467 31.8375L0 31.8603V0H15.1258ZM14.1995 12.9287C15.467 12.9287 16.507 12.5875 17.3098 12.0025C18.1093 11.4174 18.4636 10.3872 18.4636 9.11965C18.4636 8.41764 18.3498 7.73513 18.1223 7.27687C17.8761 6.81242 17.5188 6.41607 17.0823 6.1231C16.6108 5.86603 16.1069 5.67363 15.584 5.55109C15.012 5.43734 14.427 5.43734 13.7412 5.43734H7.05262V12.945C7.05262 12.9287 14.2027 12.9287 14.2027 12.9287H14.1995ZM14.5407 26.5562C15.2395 26.5562 15.9253 26.4424 16.5103 26.3287C17.0823 26.2149 17.6673 25.9842 18.1223 25.6267C18.5773 25.2692 18.9348 24.9279 19.2793 24.3592C19.5068 23.7872 19.7343 23.0884 19.7343 22.2759C19.7343 20.6638 19.2793 19.5068 18.3498 18.6943C17.4235 17.9956 16.1528 17.6543 14.6545 17.6543H7.05262V26.5399H14.544V26.5562H14.5407ZM36.8296 26.4424C37.7591 27.3687 39.1404 27.827 40.9832 27.827C42.2507 27.827 43.4077 27.4825 44.3372 26.8975C45.2635 26.1987 45.8323 25.5129 46.0598 24.8174H51.7149C50.7854 27.5832 49.4008 29.5527 47.5613 30.8235C45.7218 31.9773 43.5215 32.6631 40.8662 32.6631C39.1683 32.6706 37.4843 32.3563 35.9034 31.7368C34.4805 31.2079 33.211 30.3347 32.208 29.1952C31.1383 28.1327 30.344 26.8252 29.894 25.3862C29.3252 23.8879 29.0815 22.2759 29.0815 20.4201C29.0815 18.6943 29.309 17.066 29.894 15.5678C30.479 14.0727 31.2785 12.7987 32.3218 11.6449C33.3618 10.6049 34.6326 9.67541 36.0171 9.1034C37.5609 8.48874 39.2078 8.17437 40.8694 8.17714C42.839 8.17714 44.5648 8.51839 46.063 9.33091C47.558 10.1434 48.7183 11.0599 49.6446 12.4445C50.5708 13.712 51.2566 15.2103 51.7279 16.8255C51.9554 18.4376 52.0691 20.0626 51.9554 21.9054H35.2176C35.2176 23.7904 35.9001 25.5129 36.8296 26.4424ZM44.1097 14.3132C43.2972 13.5007 42.0232 13.0425 40.5249 13.0425C39.4849 13.0425 38.6854 13.27 37.9866 13.6145C37.2879 13.9557 36.8296 14.427 36.3746 14.882C35.9498 15.3281 35.667 15.8903 35.5621 16.4973C35.4451 17.066 35.3346 17.5373 35.3346 17.9923H45.7218C45.4943 16.2828 44.9093 15.1258 44.1065 14.3132H44.1097ZM33.9468 2.19704H46.8755V5.30734H33.9468V2.19704Z" fill="#9E8B7A"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}