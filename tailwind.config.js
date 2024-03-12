/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1.2' }]
      }
    },
  },
  plugins: [],
}


// so if we want to geneerate the config file of our own then we can do that by using the command 
// npx tailwindcss init --full
// by this we can generate the config file of our own and then we can customise it as per our need

// so we customise the confg file of the tailwind to add custom color , font and other things whcih are not present already in it 
// so we can extend the propertes and the values of it sok that we can add custom values for it and eska mat;ba ke humne kuch naya add kia hai tailwind me


// now we have added the custom built in class in the config file so we can now use it 
// for that we have to extend the class from the config file generator --full and then we an extend it 