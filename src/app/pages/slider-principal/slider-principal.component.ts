import { Component, OnInit } from '@angular/core';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit {
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {

    let timer = TimerObservable.create(2000, 40000);
        this.subscription = timer.subscribe(t => {

              let current2 = $('.flex--active').data('slide'),
              // get button data-slide
              next2 = $(this).data('slide');

              $('.slide-nav').removeClass('active');
              $(this).addClass('active');

              if (current2 === next2) {
                return false;
              } else {
                setTimeout(function() {
                  $('.slider__warpper').find('.flex__container[data-slide=' + 2 + ']').addClass('flex--preStart');
                  $('.flex--active').addClass('animate--end');
                  setTimeout(function() {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                  }, 800);
                }, 5000);
              }
              // get current slide
              let current3 = $('.flex--active').data('slide'),
                // get button data-slide
                next3 = $(this).data('slide');

              $('.slide-nav').removeClass('active');
              $(this).addClass('active');

              if (current3 === next3) {
                return false;
              } else {
                setTimeout(function() {
                  $('.slider__warpper').find('.flex__container[data-slide=' + 3 + ']').addClass('flex--preStart');
                  $('.flex--active').addClass('animate--end');
                  setTimeout(function() {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                  }, 800);
                }, 11000);
              }

              let current4 = $('.flex--active').data('slide'),
                // get button data-slide
                next4 = $(this).data('slide');

              $('.slide-nav').removeClass('active');
              $(this).addClass('active');

              if (current4 === next4) {
                return false;
              } else {
                setTimeout(function() {
                  $('.slider__warpper').find('.flex__container[data-slide=' + 4 + ']').addClass('flex--preStart');
                  $('.flex--active').addClass('animate--end');
                  setTimeout(function() {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                  }, 800);
                }, 16000);
              }
              let current5 = $('.flex--active').data('slide'),
                // get button data-slide
                next5 = $(this).data('slide');

              $('.slide-nav').removeClass('active');
              $(this).addClass('active');

              if (current5 === next5) {
                return false;
              } else {
                setTimeout(function() {
                  $('.slider__warpper').find('.flex__container[data-slide=' + 5 + ']').addClass('flex--preStart');
                  $('.flex--active').addClass('animate--end');
                  setTimeout(function() {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                  }, 800);
                }, 21000);
              }
              // get current slide


              let current = $('.flex--active').data('slide'),
                // get button data-slide
                next = $(this).data('slide');

              $('.slide-nav').removeClass('active');
              $(this).addClass('active');

              if (current === next) {
                return false;
              } else {
                setTimeout(function() {
                  $('.slider__warpper').find('.flex__container[data-slide=' + 1 + ']').addClass('flex--preStart');
                  $('.flex--active').addClass('animate--end');
                  setTimeout(function() {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                  }, 800);
                }, 28000);
              }
        });





 // Manual
  $('.slide-nav').click(function ejecutar() {

    // get current slide
    let current = $('.flex--active').data('slide'),
      // get button data-slide
      next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }
  });



    scroll
    $(function() {
      $('a[href="#portafolio"],a[href="#9"],a[href="#2"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600, 'linear');
      });
    });

  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
