export class MockPromise {

  then(callback: Function) {
    callback();
    return this;
  }

  catch(callback: Function) {
    callback();
  }
}
