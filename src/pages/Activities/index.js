import React from 'react';

import {Image} from '../../styles'

import { ActivityWrapper, ActivityGridComponent, Title, Text, Line } from './style';
import { BLACK_HEX, GREEEN_HEX, ORANGE_HEX, WHITE_HEX } from '../../config/constants';

const Activities = () => {
    const data = [
        {
            title: 'lab equipment and consumables',
            text: "Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque",
            backgroundColor: GREEEN_HEX,
            color: WHITE_HEX
        },
        {
            title: 'Mining and exploration',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: BLACK_HEX,
            color: WHITE_HEX
        },
        {
            title: 'yeast and yeast derivatives',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: ORANGE_HEX,
            color: WHITE_HEX
        },
        {
            title: 'trainings and consultancy',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: WHITE_HEX,
            color: BLACK_HEX
        },
    ];
    const images = [
        {
            src: 'https://www.dropbox.com/s/khrlq8h91sby0y9/lab%20serv2.jpg?raw=1',
            id: '1234'
        },
        {
            src: 'https://www.dropbox.com/s/pce4w1ww51b8g1b/mine%20serv1.jpg?raw=1',
            id: '123'
        },
        {
            src: 'https://www.dropbox.com/s/gj1pc687zaxswjr/yeast1.jpg?raw=1',
            id: '123456'
        },
        {
            src: 'https://www.dropbox.com/s/i91das6pcp6fiqx/consultansy.jpeg?raw=1',
            id: '1232134245'
        },
    ];
    return(
        <ActivityWrapper>
            {data.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        padding = {71}
                        startHeight = {index<=1?index+1:index+2} 
                        endHeight = {index<=1?index+3:index+4}  
                        backgroundColor = {item.backgroundColor} 
                        startWidth = {index%2?1:2} 
                        endWidth = {index%2?2:3}
                        mobileStartHeight = {(index+1)*2}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2+1}
                        mobileEndWidth = {2} 
                    >
                        <Title color = {item.color} >
                            {item.title}
                            <Line color = {item.color} ></Line>
                        </Title>
                        <Text color = {item.color} >{item.text}</Text>
                    </ActivityGridComponent>
                );
            })}
            {images.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        startHeight = {index<=1?index%2?index+2:index+1:index%2?index+3:index+2} 
                        endHeight = {index<=1?index%2?index+3:index+2:index%2?index+4:index+3}  
                        startWidth = {index%2?2:1} 
                        endWidth = {index%2?3:2}
                        mobileStartHeight = {index*2+1}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2}
                        mobileEndWidth = {2}
                    >
                        <Image src = {item.src} noMargin = {true} maxWidth = '50vw ' maxHeight = '50vh' mobileWidth = '100vw' mobileHeight = '50vh' />
                    </ActivityGridComponent>
                )
            })}
        </ActivityWrapper>
    )
}

export default Activities;