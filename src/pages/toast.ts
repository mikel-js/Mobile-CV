// Michael Castro
// 1902459

export function toast(message: string, duration = 2000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;
  
    document.body.appendChild(toast);
    return toast.present();
  }
  // These are to show message, with better UI