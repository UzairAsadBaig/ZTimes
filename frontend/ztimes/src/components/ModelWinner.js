import { Modal} from 'antd';



export function countDown(Nums) {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Winners',
    content:  `${Nums[0]}${Nums[1]}${Nums[2]}${Nums[3]}`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      // content: `Next winner will be announced in ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};