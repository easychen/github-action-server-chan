import * as core from '@actions/core'
import axios from 'axios';

async function run(): Promise<void> {
  try {
    const sendkey:string = core.getInput('sendkey');
    const title:string = core.getInput('title');
    const desp:string|boolean = core.getInput('desp')??false;
    const url:string = `https://sctapi.ftqq.com/${sendkey}.send`;

    // send request via urlencoded
    let params = new URLSearchParams();
    params.append( 'title', title );
    if( desp ) params.append( 'desp', desp);

    const ret = await axios.post( url  , params );
    return ret.data??false;


  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
