import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    templateUrl: './homepage.component.html'
})
export class HomeComponent implements OnInit {
    @HostBinding('class') classes = 'landing-page';
    public pieces: any[];
    public tinymce: any;
    public author: string;
    public quote: string;
    public quotes: any[] = [
        {
            quote: 'We are all apprentices in a craft where no one ever becomes a master.',
            author: 'Ernest Hemingway'
        },
        {
            quote: 'Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.',
            author: 'Virginia Woolf'
        },
        {
            quote: 'I don’t need an alarm clock. My ideas wake me.',
            author: 'Ray Bradbury'
        },
        {
            quote: 'Writers live twice.',
            author: 'Natalie Goldberg'
        },
        {
            quote: 'There is nothing to writing. All you do is sit down at a typewriter and bleed.',
            author: 'Ernest Hemingway'
        },
        {
            quote: 'If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that.',
            author: 'Stephen King'
        },
        {
            quote: 'Fantasy is hardly an escape from reality. It\'s a way of understanding it.',
            author: 'Lloyd Alexander'
        },
        {
            quote: 'Don\'t tell me the moon is shining; show me the glint of light on broken glass.',
            author: 'Anton Chekhov'
        },
        {
            quote: 'We have to continually be jumping off cliffs and developing our wings on the way down.',
            author: 'Kurt Vonnegut'
        },
        {
            quote: 'Don\'t bend; don\'t water it down; don\'t try to make it logical; don\'t edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.',
            author: 'Franz Kafka'
        },
        {
            quote: 'The purpose of a writer is to keep civilization from destroying itself.',
            author: 'Albert Camus'
        },
        {
            quote: 'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.',
            author: 'John Steinbeck'
        },
        {
            quote: 'You always get more respect when you don\'t have a happy ending.',
            author: 'Julia Quinn'
        },
        {
            quote: 'Learn the rules like a pro, so you can break them like an artist.',
            author: 'Pablo Picasso'
        },
        {
            quote: 'The most valuable of all talents is that of never using two words when one will do.',
            author: 'Thomas Jefferson'
        }
    ];

    ngOnInit() {
        let min = 0;
        let max = this.quotes.length - 1;
        let index = Math.floor(Math.random() * (max - min + 1)) + min;
        this.author = this.quotes[index].author;
        this.quote = this.quotes[index].quote;
    }
}
