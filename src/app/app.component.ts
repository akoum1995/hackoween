import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import Glide from '@glidejs/glide';

// import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
// import * as moment from 'moment';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

// import PerfectScrollbar from 'perfect-scrollbar';
import { Location } from '@angular/common';
// import { GetStreamService } from '../../services/GetStreamService';
import { environment } from '../environments/environment';
import { Meta } from '@angular/platform-browser';

declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  resetEmailForm: FormGroup;
  registerModal = 'none';
  loginModal = 'none';
  ResetPasswordModal = 'none';
  isCollapsed = 'none';
  landingText = 'block';

  base_url = environment.base_url;
  constructor(private router: Router, location: Location, private element: ElementRef, public meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({ property: 'og:type', content: 'SkilloCube' });
    this.meta.updateTag({ property: 'og:title', content: 'SkilloCube' });
    this.meta.updateTag({ property: 'og:description', content: 'SkilloCube' });
    this.meta.updateTag({ property: 'og:image', content: 'https://hire.fivepoints.fr/assets/images/skillocube_noir_carre.png' });

    this.resetEmailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });



    if (this.router.url === '/login') {
      this.openLoginModal();
    }
    if (this.router.url.includes('/login')) {
      this.openLoginModal();
    }


    if (this.router.url === '/register') {
      this.openRegisterModal();
    }


  }

  resetEmail() {
  }
  openLoginModal() {
    this.closeRegisterModal();
    this.loginModal = 'block';
    this.landingText = 'none';
  }
  closeLoginModal() {
    this.loginModal = 'none';
    this.landingText = 'block';
    this.router.navigateByUrl('/home');
  }
  openResetPasswordModal() {
    // this.closeLoginModal();
    this.loginModal = 'none';
    this.landingText = 'block';
    this.ResetPasswordModal = 'block';
    this.landingText = 'none';
  }
  closeResetPasswordModal() {
    this.ResetPasswordModal = 'none';
    this.landingText = 'block';
    this.router.navigateByUrl('/home');
  }

  openRegisterModal() {
    // this.closeLoginModal();
    this.registerModal = 'block';
    this.landingText = 'none';
  }
  closeRegisterModal() {
    this.registerModal = 'none';
    this.landingText = 'block';
  }

  openCollapseNav() {
    if (this.isCollapsed === 'none') {
      this.isCollapsed = 'block';
    } else {
      if (this.isCollapsed === 'block') {
        this.isCollapsed = 'none';
      }
    }
  }
  logout() {
  }

  ngAfterViewInit() {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 1,
      breakpoints: {
        800: { perView: 3 },
        480: { perView: 1 },
      },
      focusAt: 'center',
      autoplay: 2000,
      perView: 7,
    });
    glide.mount();
  }
}
