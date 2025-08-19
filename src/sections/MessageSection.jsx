import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#FACC15   ",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#EAB308   ",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
 <section className="message-content border-0">
  <div className="container mx-auto flex-center py-28 relative">
    <div className="w-full h-full">
      <div className="msg-wrapper">
        <h1 className="first-message">Celebrate love, joy, and</h1>

        <div
          style={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          className="msg-text-scroll"
        >
          <div className="  md:pb-5 pb-5 px-5">
            <h2 className=" ">Forever</h2>
          </div>
        </div>

        <h1 className="second-message mt-10">
          with unforgettable moments  
        </h1>
      </div>

      <div className="flex-center md:mt-20 mt-10">
        <div className="max-w-md  text-lg px-10 flex-center overflow-hidden text-white">
          <p>
            Elegant décor, magical ceremonies, and memories you’ll treasure forever.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default MessageSection;
