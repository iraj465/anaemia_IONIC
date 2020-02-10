import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { FirstPage } from '../pages/first/first';
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { ImageUploadPage } from "../pages/image-upload/image-upload";
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';
import { S3ServiceProvider } from '../providers/s3-service/s3-service';
import { Camera } from "@ionic-native/camera";
import { SystemVariableProvider } from '../providers/system-variable/system-variable';
import { Login1Page } from "../pages/login1/login1";
import { SignUp1Page } from "../pages/sign-up1/sign-up1";

@NgModule({
  declarations: [MyApp, FirstPage , LoginPage, Login1Page, SignUpPage, SignUp1Page, ImageUploadPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, FirstPage , LoginPage, Login1Page, SignUpPage, SignUp1Page , ImageUploadPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CognitoServiceProvider,
    S3ServiceProvider,
    Camera,
    SystemVariableProvider,
    S3ServiceProvider
  ]
})
export class AppModule {}
