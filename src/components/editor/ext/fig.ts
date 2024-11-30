import { Node, mergeAttributes } from '@tiptap/core';

// Custom Figure Node
export const Figure = Node.create({
  name: 'figure',

  group: 'block',

  content: 'image figcaption',

  parseHTML() {
    return [
      {
        tag: 'figure',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['figure', mergeAttributes(HTMLAttributes), 0];
  },
});

// Custom Figcaption Node
export const Figcaption = Node.create({
  name: 'figcaption',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'figcaption',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['figcaption', mergeAttributes(HTMLAttributes), 0];
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        return editor.commands.insertContent('<p></p>');
      },
    };
  },
});
