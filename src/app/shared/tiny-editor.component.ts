import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

declare var tinymce: any;

@Component({
    selector: 'simple-tiny',
    template: `<textarea id={{elementId}} [(ngModel)]="pieceBodyText"></textarea>`
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Input() ngModel: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    onChange(value) {
        console.log(value);
    }

    ngOnInit(){
        console.log(this.elementId);
    }

    ngAfterViewInit() {
        tinymce.init({
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars fullscreen code',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
            ],
            toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons | codesample ',
            image_advtab: true,
            height: 500,
            schema: 'html5',
            selector: '#' + this.elementId,
            skin_url: './../../assets/bower_components/tinymce/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
        console.log(this.ngModel, this.elementId);
        // magic and stuff DO NOT DELETE
        setTimeout(() => { tinymce.get(this.elementId).setContent(this.ngModel); }, 400);
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
