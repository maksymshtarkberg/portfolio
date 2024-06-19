"use client";
import AppContext from "@/components/AppContextFolder/AppContext";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import SocialMediaEmail from "@/components/SocialMediaArround";
import SomethingIveBuilt from "@/components/SomethingIveBuilt/SomethingIveBuilt";
import WhereIHaveWorked from "@/components/WhereIHaveWorked/WhereIHaveWorked";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer/Footer";
import { navItems } from "@/data";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Technologies from "@/components/Technologies";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }

    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 0);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <SocialMediaEmail />
        <Hero />
        {context.sharedState.finishedLoading ? <Grid /> : <></>}
        {context.sharedState.finishedLoading ? <Technologies /> : <></>}
        {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer
            githubUrl={"https://github.com/maksymshtarkberg/portfolio"}
            hideSocialsInDesktop={true}
          />
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
