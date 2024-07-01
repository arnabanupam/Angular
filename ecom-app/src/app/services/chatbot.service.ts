import { Injectable } from '@angular/core';
import { Message } from '../datatype';

interface Category {
  label: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private inputs: Message[] = [];
  getCategories(): Category[] {
    return [
      { label: 'Car', link: '/searchByCategory/Car' },
      { label: 'Tablet', link: '/searchByCategory/Tablet' },
    ];
  }

  addMessages(input: Message) {
    input.timestamp = new Date();
    this.inputs.push(input);
  }

  getMessages(): Message[] {
    return this.inputs;
  }

  generateReply(input: string) {
    let replyText: string ="'I\'m not sure how to respond to that. Can you ask admin?'";

    if (input.includes('Hello') || input.includes('Hi')) {
    replyText = 'Hello there! How can I help you today?';
    } else if (input.includes('price')) {
    replyText = 'Our product prices vary. Visit our products page for detailed pricing.';
    } else if (input.includes('order')) {
    replyText = 'You can track your order status by logging into your account and visiting the orders section.';
    } else if (input.includes('problem') || input.includes('help')) {
    replyText = 'What problem are you facing? Please provide some details so I can assist you better.';
    } else if (input.includes('thank you') || input.includes('thanks')) {
    replyText = 'You\'re welcome! If you have any other questions, feel free to ask.';
    }else if (input.includes('All Categories')) {
      replyText = 'Here are some categories:';
      replyText += '<br><a href="/category1">Category 1</a>';
      replyText += '<br><a href="/category2">Category 2</a>';
    }
    return replyText;
  }
}
