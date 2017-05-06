let sentences = [
  { content: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { content: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { content: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { content: 'Not a pangram', pangram: false },
  { content: '', pangram: false },
]

let isPangram = (sentence) => {
  let lowerCase = sentence.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < alphabet.length; i++) {
      if (sentence.includes(alphabet.charAt[i] !== true))

      return false;
    }
  }

    sentences.forEach((sentence) => {
      let result = isPangram(sentence.content)
      console.log(`${sentence.content}, pangram: ${sentence.pangram}`);

    });
