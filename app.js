  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let sustantivo of noun) {
      console.log(`${pronombre} ${adjetivo} ${sustantivo}.com`)
    }
  }
}