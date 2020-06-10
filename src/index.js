import Post from "./models/Post";
import './styless/styles.css'
import * as $ from 'jquery'
// import json from'./assets/json.json'
// import xml from './assets/data.xml'
import Webpacklogo from '@/assets/webpack-logo.png'


const post = new Post('webpack post title', Webpacklogo)
console.log(post)
$('pre').html(post.toSting())
// console.log(json, 'json')
// console.log(xml, 'xml')
