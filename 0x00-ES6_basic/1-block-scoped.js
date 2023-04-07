export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line in code
    const task = true;
    // eslint-disable-next-line in the code
    const task2 = false;
  }

  return [task, task2];
}
