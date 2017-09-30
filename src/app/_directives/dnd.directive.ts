import { Directive, HostListener, EventEmitter, ElementRef, Renderer2, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output() private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();
  @Input() over: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('drop', ['$event'])
  onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.renderer.removeClass(this.el.nativeElement, this.over);

    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.filesChangeEmiter.emit(files);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(evt) {
    evt.preventDefault();
    this.renderer.addClass(this.el.nativeElement, this.over);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt) {
    evt.preventDefault();
    this.renderer.removeClass(this.el.nativeElement, this.over);
  }
}
