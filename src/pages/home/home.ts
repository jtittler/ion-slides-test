import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';
import { InfoPage } from '../info/info';

enum EVENTS {
  SLIDE_AUTOPLAY,
  SLIDE_AUTOPLAY_START,
  SLIDE_AUTOPLAY_STOP,
  SLIDE_DID_CHANGE,
  SLIDE_DOUBLE_TAP,
  SLIDE_DRAG,
  SLIDE_NEXT_END,
  SLIDE_NEXT_START,
  SLIDE_PREV_END,
  SLIDE_PREV_START,
  SLIDE_REACH_END,
  SLIDE_REACH_START,
  SLIDE_TAP,
  SLIDE_WILL_CHANGE
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  public SLIDE_AUTOPLAY: EVENTS = EVENTS.SLIDE_AUTOPLAY;
  public SLIDE_AUTOPLAY_START: EVENTS = EVENTS.SLIDE_AUTOPLAY_START;
  public SLIDE_AUTOPLAY_STOP: EVENTS = EVENTS.SLIDE_AUTOPLAY_STOP;
  public SLIDE_DID_CHANGE: EVENTS = EVENTS.SLIDE_DID_CHANGE
  public SLIDE_DOUBLE_TAP: EVENTS = EVENTS.SLIDE_DOUBLE_TAP;
  public SLIDE_DRAG: EVENTS = EVENTS.SLIDE_DRAG;
  public SLIDE_NEXT_END: EVENTS = EVENTS.SLIDE_NEXT_END;
  public SLIDE_NEXT_START: EVENTS = EVENTS.SLIDE_NEXT_START;
  public SLIDE_PREV_END: EVENTS = EVENTS.SLIDE_PREV_END;
  public SLIDE_PREV_START: EVENTS = EVENTS.SLIDE_PREV_START;
  public SLIDE_REACH_END: EVENTS = EVENTS.SLIDE_REACH_END;
  public SLIDE_REACH_START: EVENTS = EVENTS.SLIDE_REACH_START;
  public SLIDE_TAP: EVENTS = EVENTS.SLIDE_TAP;
  public SLIDE_WILL_CHANGE: EVENTS = EVENTS.SLIDE_WILL_CHANGE;
  public messages: string[] = [];

  constructor(public navCtrl: NavController, public modal: ModalController) {

  }

  popInfo(event) {
    let info = this.modal.create(InfoPage);
    info.present();
  }

  clear() {
    this.messages = [];
    this.slides.slideTo(0);
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  fireEvent(e: EVENTS) {
    let m: string = "";

    switch(e) {
      case EVENTS.SLIDE_AUTOPLAY:
        m = "ionSlideAutoplay fired.";
        break;
      case EVENTS.SLIDE_AUTOPLAY_START:
        m = "ionSlideAutoplayStart fired.";
        break;
      case EVENTS.SLIDE_AUTOPLAY_STOP:
        m = "ionSlideAutoplayStop fired.";
        break;
      case EVENTS.SLIDE_DID_CHANGE:
        m = "ionSlideDidChange fired.";
        break;
      case EVENTS.SLIDE_DOUBLE_TAP:
        m = "ionSlideDoubleTap fired.";
        break;
      case EVENTS.SLIDE_DRAG:
        m = "ionSlideDrag fired.";
        break;
      case EVENTS.SLIDE_NEXT_END:
        m = "ionSlideNextEnd fired.";
        break;
      case EVENTS.SLIDE_NEXT_START:
        m = "ionSlideNextStart fired.";
        break;
      case EVENTS.SLIDE_PREV_END:
        m = "ionSlidePrevEnd fired.";
        break;
      case EVENTS.SLIDE_PREV_START:
        m = "ionSlidePrevStart fired.";
        break;
      case EVENTS.SLIDE_REACH_END:
        m = "ionSlideReachEnd fired.";
        break;
      case EVENTS.SLIDE_REACH_START:
        m = "ionSlideReachStart fired.";
        break;
      case EVENTS.SLIDE_TAP:
        m = "ionSlideTap fired.";
        break;
      case EVENTS.SLIDE_WILL_CHANGE:
        m = "ionSlideWillChange fired.";
        break;
    }

    var curr: number = this.slides.getActiveIndex();
    this.messages.push("Active Slide " + curr + ": " + m);

  }

  ngAfterViewInit() {
    this.slides.fade = { crossFade: true };
  }

  autoplayStart() {
    this.slides.autoplay = 1000;
    this.slides.startAutoplay();
  }

  autoplayStop() {
    this.slides.stopAutoplay();
  }
}
