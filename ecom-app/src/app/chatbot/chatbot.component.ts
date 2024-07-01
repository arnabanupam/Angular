import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message, product } from '../datatype';
import { ChatbotService } from '../services/chatbot.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

interface Category {
  label: string;
  link: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{
  @ViewChild('chatContainer') private chatContainer: ElementRef | undefined;
  isOpen = false;
  inputMessage: string = '';
  messages: Message[] = []; 
  searchResult:undefined | product[];
  categories: Category[] | undefined;

  constructor(private chatService: ChatbotService, private route: Router, private product:ProductService) {} 
  ngOnInit(): void {
    this.categories = this.chatService.getCategories();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  } 

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.messages = this.chatService.getMessages(); 
    }
  }

  sendMessage() {
    if (this.inputMessage.trim()) {
      const userMessage: Message = { text: this.inputMessage, user: true, timestamp: new Date() };
      this.chatService.addMessages(userMessage); 
      this.botReply(this.inputMessage);
      this.inputMessage = '';
    }
  }

  botReply(input: string) {
    const replyText = this.chatService.generateReply(input); 
    setTimeout(() => {
      this.chatService.addMessages({ text: replyText, user: false, timestamp: new Date() }); 
      if (this.isOpen) {
        this.messages = this.chatService.getMessages(); 
      }
    }, 1000);
  }

  scrollToBottom(): void {
    try {
      if (this.chatContainer && this.isOpen) { 
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error(err);
    }
  }

  submitSearch(val:string){
    console.warn(val)
    this.route.navigate([`searchByCategory/${val}`]);
  }

  handleButtonClick(buttonText: string) {
    const chatService: Message = { text: buttonText, user: true, timestamp: new Date() };
    this.chatService.addMessages(chatService);
    this.botReply(buttonText);
  }

  handleCategoryClick(categoryLink: string) {
    console.log(`Category clicked: ${categoryLink}`);
  }
}

