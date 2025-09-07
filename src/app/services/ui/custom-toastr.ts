import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastr {

  constructor(private toastr: ToastrService) { }

  //ToastrOptions default değer olmasına rağmen undefined neden olabiliyor.
  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>){
    const messageType = toastrOptions.messageType ?? ToastrMessageType.Success;
    const position = toastrOptions.position ?? ToastrPosition.TopRight;
    this.toastr[messageType](message, title, { positionClass: position });
  }

}
export class ToastrOptions{
  messageType: ToastrMessageType = ToastrMessageType.Success;
  position: ToastrPosition = ToastrPosition.TopRight;
}

export enum ToastrMessageType{
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info"
}

export enum ToastrPosition{
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  TopCenter = "toast-top-center",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  BottomCenter = "toast-bottom-center",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width"
}
