import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class Alertify {

  constructor() { }

  message(message: string, options: AlertifyOptions = new AlertifyOptions()){
    alertify.set('notifier', 'delay', options.delay); // 3 saniye sonra kapatılır
    alertify.set('notifier', 'position', options.position);
    const messageInstance = alertify[options.messageType](message);
    if(options.dismissOthers){
      messageInstance.dismissOthers();
    }
  }

  dismissAll(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Success;
  position: Position = Position.TopCenter;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Notify = "notify",
  Message = "message"
}

export enum Position {
  TopRight = "top-right",
  TopLeft = "top-left",
  TopCenter = "top-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center"
}
