import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'business-card-wc',
    styleUrl: 'business-card.scss',
    shadow: true
})
export class BusinessCard {

    @Prop() firstName: string = "John";
    @Prop() lastName: string = "Doe";
    @Prop() ocupation: string = "Full Stack Developer";
    @Prop() address: string = "Jose Enrique Rodo 1828";
    @Prop() location: string = "Montevideo, Uruguay";
    @Prop() telephone: string = "091 333 333";
    @Prop() website: string = "www.johndoe.com";

    render() {
        return [
            <div class="card front">
                <div class="blue"></div>
                <div class="yellow"></div>
                <div class="pink"></div>
                <div class="dots"></div>
                <div class="personal-intro">
                    <p>{this.firstName} {this.lastName}</p>
                    <p>{this.ocupation}</p>
                </div>
            </div>,
            <div class="card back">
                <div class="yellow"></div>
                <div class="top dots"></div>
                <div class="personal-info">
                    <p>{this.firstName} {this.lastName}</p>
                    <p>{this.ocupation}</p>
                    <p>{this.address}</p>
                    <p>{this.location}</p>
                    <p>{this.telephone}</p>
                    <p>{this.website}</p>
                </div>
                <div class="bottom dots"></div>
                <div class="pink"></div>
            </div>
        ]
    }
}
