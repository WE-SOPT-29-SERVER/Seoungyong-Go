const person = new Object();

person.name = '고성용';
person.part = 'Server';
person['group'] = 'OB';
person.sayHello = function () {
  console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log('===============');

const animal = {
  animalType: 'dog',
  animalName: '뽀삐',
  animalFriends: ['코코', '초코', '쿠키'],
  bark: function () {
    console.log(`${this.animalName}: 멍멍`);
  },
  thisFriends: function () {
    this.animalFriends.forEach((friend) => {
      console.log(`${this.animalName}의 친구: ${friend}`);
    });
  },
};

console.log(animal);
animal.bark();
animal.thisFriends();
