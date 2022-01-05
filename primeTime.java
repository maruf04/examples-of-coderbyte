import java.util.*; 
import java.io.*;

class Main {

  public static boolean PrimeTime(int num) {
    if(num>1){
      for(int i=2;i<num;i++){
        if(num%i==0){
          return false;
        }
      }
    }
    return true;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(PrimeTime(s.nextLine())); 
  }

}