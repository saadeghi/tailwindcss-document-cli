#!/usr/bin/env node

const Fuse = require('fuse.js')
const Data = require('./data.js')
const chalkPipe = require('chalk-pipe');
const boxen = require('boxen');

// styles
const searchResult = chalkPipe('chalk.green');
const searchTitle = chalkPipe('chalk.bgGreen.black');
const itemTitle = chalkPipe('chalk.bgBlue.black');
const itemValue = chalkPipe('chalk.white');
const itemLink = chalkPipe('chalk.gray');
const warn = chalkPipe('chalk.yellow');

// draw box
function box(input) {
  return boxen(input, {
    padding: 0,
    margin: 0,
  })
}

// get input parameters and return as string
let input = process.argv
input.splice(0, 2);
input = input.join(' ');

// search if there is an input
if (input && input.length) {
  search(input)
} else {
  console.log(
    box(
      warn(` Please enter a search term `)
      +
      `\n Example: ` + searchTitle(` tw border `)
    )
  )
}

// search function
function search(input) {

  const fuse = new Fuse(Data, {
    includeScore: true,
    threshold: 0.2,
    keys: ['title', 'values.name']
  })

  const result = fuse.search(input)

  if (result.length != 0) {
    console.log(
      searchResult(
        `🔍 Found `
        +
        searchTitle(` ${result.length} `)
        +
        (result.length == 1 ? ` result for ` : ` results for `)
        +
        searchTitle(` ${input} `)
      )
    )
    Object.keys(result).forEach(resultKey => {
      let resultTitle = result[resultKey]['item']['title']
      let resultValues = result[resultKey]['item']['values']
      let resultUrl = 'https://tailwindcss.com/docs/' + result[resultKey]['item']['permalink']

      console.log(`\n` + itemTitle(` ${resultTitle} `) + itemLink(` ${resultUrl}`))

      for (const [key, value] of Object.entries(resultValues)) {
        console.log(
          itemValue`  ${resultValues[key]['name']} `
        )
      }

    })
  } else {
    console.log(
      box(
        warn(` No result `)
        +
        `\n Try searching another term `
      )
    )
  }
  console.log(`\n`)
}










