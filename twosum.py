#coderbyte 0 puan dondu
def TwoSum(arr):
  top=[];
  i=0
  while(i<len(arr)):
    j=i+1
    while(j<len(arr)):
      if(arr[i] +arr[j]==arr[0]):
        top.append([arr[i],arr[j]])
      j=j+1
    i=i+1

  # code goes here
  return top

# keep this function call here 
print(TwoSum(raw_input()))