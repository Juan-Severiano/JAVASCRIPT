n = int(input('Digite um nunero'))

def fatorial(n):
  result = 1
  for i in range(1, n + 1):
    result *= i
  return result

response = fatorial(n)
print(f'O faltorial de {n} é {response}')