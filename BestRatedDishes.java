import java.util.ArrayList;

public class BestRatedDishes {

	public static void main(String[] args) {
		int numDishes=3;
		int ratingDishes[]={-1,-10,3,5};
		dish(numDishes, ratingDishes);
	}

	private static void dish(int numDishes, int[] ratingDishes) {
		int totalRating=Integer.MIN_VALUE;
		for(int i=0; i< (1<<ratingDishes.length); i++){
			int sum=0; 
			ArrayList<Integer> list=new ArrayList<>();
			for(int j=0; j< ratingDishes.length; j++){
				if(( i & 1<<j ) > 0){
					list.add(ratingDishes[j]);
				}
			}
			
			if(list.size() == numDishes){
//				System.out.println(list);
				int num=1;
				for(int rating : list){
					sum = sum + (num * rating);
//					System.out.print(sum+"+("+num+"*"+rating+")");
					num++;
				}
//				System.out.println("sum : "+sum);
				if(sum > totalRating) totalRating = sum;
//				System.out.println("Total Rating: "+totalRating);
			}
		}
		System.out.println("Maximum Rating : "+totalRating);
	}

}