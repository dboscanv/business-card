/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface BusinessCard {
    'address': string;
    'firstName': string;
    'lastName': string;
    'location': string;
    'ocupation': string;
    'telephone': string;
    'website': string;
  }
  interface BusinessCardAttributes extends StencilHTMLAttributes {
    'address'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'location'?: string;
    'ocupation'?: string;
    'telephone'?: string;
    'website'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'BusinessCard': Components.BusinessCard;
  }

  interface StencilIntrinsicElements {
    'business-card': Components.BusinessCardAttributes;
  }


  interface HTMLBusinessCardElement extends Components.BusinessCard, HTMLStencilElement {}
  var HTMLBusinessCardElement: {
    prototype: HTMLBusinessCardElement;
    new (): HTMLBusinessCardElement;
  };

  interface HTMLElementTagNameMap {
    'business-card': HTMLBusinessCardElement
  }

  interface ElementTagNameMap {
    'business-card': HTMLBusinessCardElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
