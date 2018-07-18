import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom';
import Login from './components/Login';
import AuthService from './utils/AuthService';
import MainLayout from './components/MainLayout';

export default class Main extends Component {
  constructor() {
    super();
    AuthService.getTokenFromServer();
  }
  componentDidMount() {}
  render() {
    if (this.props.location.pathname !== '/Login') return <MainLayout />;
    else return null;
  }
}

const f20=1;
const f22=1;
const f25=1;
const f30=1;
const f40=1;
const f50=1;

const f50=1;

const f50=1;

const f50=1;
const f90=1;
const f100=1;
const f200=1;
const f201=1;











