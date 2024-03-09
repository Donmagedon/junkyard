About = [1,2,3,4,5,6,7]
def binarySearch(liszt,toFind):
 left = 0
 right =  len(liszt) - 1
 while left <= right:
  mid = (left + right) // 2 
  if liszt[mid] == toFind:
   return mid
  elif liszt[mid] > toFind:
    right = mid - 1
  else:
   left = mid + 1 
 return None 



array = [3,4,2,6,9]


def quickSort(lis):
  limit = 2
  if len(lis) < limit:
   return lis
  else:
   pivot = lis [0]
   left = [i for i in lis[1:] if i <= pivot]
   right =[i for i in lis[1:] if i > pivot]

   return quickSort(left),  pivot , quickSort(right)

print(quickSort(array))