import { INSTANCE_STATUS } from '@/core/constant/constant';

const {
  CREATING, UPDATING, DELETING, APPROVING,
  FAILED, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, PROCESS_REJECTED,
  STOPPED, RUNNING,
} = INSTANCE_STATUS;  //解构

export default function instanceStatus(status) {
  const statusMap = {
    [CREATING]: '正在创建',
    [UPDATING]: '正在更新',
    [DELETING]: '正在删除',
    [APPROVING]: '正在审核中'
  };
  return statusMap[status] || '使用中';
}

console.log(instanceStatus('deleting'));