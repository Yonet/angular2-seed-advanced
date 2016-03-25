// angular
import {ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

// libs
import {Angulartics2} from 'angulartics2';
import {Angulartics2Segment} from 'angulartics2/src/providers/angulartics2-segment';

// app
import {NameListService} from '../../frameworks/app.framework/index';
import {RouteComponent} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';

@RouteComponent({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: './components/app/app.component.html',
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
@RouteConfig([
  { path: '/', component: HomeComponent, as: 'Home' },
  { path: '/about', component: AboutComponent, as: 'About' }
])
export class AppComponent {
  constructor(public angulartics2: Angulartics2, public segment: Angulartics2Segment) {

  }
}
