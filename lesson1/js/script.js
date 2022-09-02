'use strict';

const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

const itemTwoProps = document.querySelector('.item_two .props__item_four');

const itemFive = document.querySelector('.item_five .content');
const itemThree = document.querySelector('.item_three .content');

const itemTwo = document.querySelector('.item_two .content .props__list');
const itemSix = document.querySelectorAll('.item_six .props__item_two');

const itemFourItem = document.querySelectorAll('.item_four .props__item');
const itemFiveList = itemFive.querySelector('.props__list');
const itemThreeList = itemThree.querySelector('.props__list');

items.prepend(item[1], item[2], item[3], item[0], item[4], item[5]);

itemFourItem[2].after(itemTwoProps);
itemFive.append(itemThreeList);
itemThree.append(itemFiveList);
itemTwo.append(itemSix[0], itemSix[1]);
