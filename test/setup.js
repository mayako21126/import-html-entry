/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2020-12-14 17:41:09
 * @LastEditors: mayako
 * @LastEditTime: 2020-12-15 09:41:23
 */
/**
 * @author Kuitos
 * @since 2019-10-16
 */

global.window.fetch = () => {
};
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  createContextualFragment: ()=>({
    
      querySelector:() => {}
    
  }),
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});