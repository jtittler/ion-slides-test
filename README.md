# ion-slides-test
<h2>Description</h2>
  <p>This is a simple &lt;ion-slides&gt; control with 4 slides.
     A simple function is fired for each event a &lt;ion-slides&gt;
     control is supposed to handle which records the event happening
     to the screen. The PLAY and STOP buttons are SUPPOSED to start and
     stop autoplay on the slides. That doesn't seem to work at all, neither
     does slideNext and slidePrev. The RESET button clears the messages and is
     supposed to set the active slide to the 1st slide. It doesn't seem to
     change the active slide.
  </p>
  <p style="color:purple">NOTE: Use drag to slide between slides. The .slideTo .slidePrev and .slideNext
    don't seem to work
  </p>
  <h2>Findings</h2>
  <ul>
    <li>ionSlideTap fires.</li>
    <li>ionSlideDoubleTap fires.</li>
    <li>ionDrag fires.</li>
    <li>ionWillChange doesn't fire</li>
    <li>ionAutoplayStart doesn't fire</li>
    <li>ionAutoplayStop doesn't fire</li>
    <li>ionDidChange SOMETIMES fire</li>
    <li>ionNextEnd doesn't fire</li>
    <li>ionNextStart doesn't fire</li>
    <li>ionPrevEnd doesn't fire</li>
    <li>ionPrevStart doesn't fire</li>
    <li>ionReachEnd SOMETIMES fire</li>
    <li>ionReachStart doesn't fire</li>
  </ul>
