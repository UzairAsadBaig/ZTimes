import { Modal} from 'antd';



export function countDown( Nums, remainNums ) {
  let secondsToGo=5;
  const modal = Modal.success({
    title: `${remainNums?.length>0? 'Congratulations to the Winners 🥳🥳🥳🥳':'Winner:'}`,
    content: `${Nums[ 0 ]}${Nums[ 1 ]}${Nums[ 2 ]}${Nums[ 3 ]}\n , ${remainNums?.length>0? `${remainNums[ 1 ][ 0 ]}${remainNums[ 1 ][ 1 ]}${remainNums[ 1 ][ 2 ]}${remainNums[ 1 ][ 3 ]}\n , ${remainNums[ 2 ][ 0 ]}${remainNums[ 2 ][ 1 ]}${remainNums[ 2 ][ 2 ]}${remainNums[ 2 ][ 3 ]}\n , ${remainNums[ 3 ][ 0 ]}${remainNums[ 3 ][ 1 ]}${remainNums[ 3 ][ 2 ]}${remainNums[ 3 ][ 3 ]} `:''}`,

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