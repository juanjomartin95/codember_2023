const getText = () => fetch('https://codember.dev/data/files_quarantine.txt',
    {method: 'GET'}).then(response => response.text());

getText().then((text) => {
  const fileList = text.split('\n');
  const fileListSplitted = fileList.map(file => file.split('-'));
  const fileListFiltered = fileListSplitted.
      filter(([fileName, checksum]) => {
        const fileNameCharacters = fileName.split('');
        const noValidCharacters = fileNameCharacters.filter(
            (character, index) => fileNameCharacters.slice(index + 1).includes(character));
        const generatedChecksum = fileNameCharacters.filter(character => !noValidCharacters.includes(character)).join('');
        return checksum === generatedChecksum;
      });
  console.log(fileListFiltered[33 - 1]);
  // [ 'O2hrQ', 'O2hrQ' ]
});
