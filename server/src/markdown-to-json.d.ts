// declare module '@moox/markdown-to-json' {
//     const markdownAsJsTree: (markdown: string) => any;
//     export default {
//       markdownAsJsTree,
//     };
//   }
  
  declare module '@moox/markdown-to-json' {
    const markdownAsJsTree: (markdown: string) => any;
    export = markdownAsJsTree;
  }