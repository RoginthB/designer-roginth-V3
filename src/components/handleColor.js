const colors = {
    Home: [
      '#082C45',
      '#155F72',
      '#22C8DF',
      '#DDEEF3'
    ],
  
    Skills: [
      '#241710',
      ' #562E0A',
      '#FF9634',
      '#FFE4C6',
  
    ],
  
    Project: [
      '#211C39',
      '#353048',
      '#B6A5E9',
      '#E5DDFC'
    ],
  
    Experience: [
      '#1C396D',
      '#3B5481',
      '#6295EC',
      '#F2F6FF'
    ],
  
    About: [
      '#104F55',
      '#32746D',
      '#B6C05A',
      '#FFE4C6',
  
    ]
  }

  const handleColor = (e) => {
    document.querySelector("#navHeading").innerText = e;
    // if(==)
    const x = e;
    document.documentElement.style.setProperty('textPrimary', colors[x][0])
    document.documentElement.style.setProperty('--textSecondary', colors[x][1])
    document.documentElement.style.setProperty('--primary', colors[x][2])
    document.documentElement.style.setProperty('--bordercolor', colors[x][3])
    console.log(colors[x][0]);
    // ;
  }
  export default handleColor;