import type { ComponentDescriptor } from '../library/types';

/** Demo assistant replies — no live LLM. Cycled by send count. */
const DEMO_REPLIES: ComponentDescriptor[][] = [
  [
    {
      type: 'stack',
      children: [
        {
          type: 'text',
          text: 'Welcome to Chat Bar V1. Assistant messages are rendered from descriptor JSON through a local component registry — not raw HTML.',
        },
        {
          type: 'card',
          title: 'What this demo includes',
          children: [
            {
              type: 'list',
              items: [
                'Text blocks for plain copy',
                'Cards for grouped content',
                'Lists for bullet points',
                'Buttons for local demo actions',
              ],
            },
            {
              type: 'button',
              label: 'Try an action',
              action: 'demo-ping',
            },
          ],
        },
      ],
    },
  ],
  [
    {
      type: 'stack',
      children: [
        { type: 'text', text: 'Here is another sample reply with an image placeholder and a link button.' },
        {
          type: 'card',
          title: 'Useful links',
          children: [
            {
              type: 'image',
              src: 'https://placehold.co/480x160/1a1a2e/eaeaea?text=Chat+Bar+V1',
              alt: 'Chat Bar V1 placeholder',
            },
            {
              type: 'button',
              label: 'Open repo',
              href: 'https://github.com/mr-dojo/chat-bar-v1',
            },
          ],
        },
      ],
    },
  ],
  [
    {
      type: 'text',
      text: 'Keep typing — replies cycle through a few mock descriptors so you can exercise the renderer.',
    },
  ],
];

let replyIndex = 0;

export function getMockReply(_userText: string): ComponentDescriptor | ComponentDescriptor[] {
  const reply = DEMO_REPLIES[replyIndex % DEMO_REPLIES.length];
  replyIndex += 1;
  return reply;
}

export function resetMockReplies(): void {
  replyIndex = 0;
}
