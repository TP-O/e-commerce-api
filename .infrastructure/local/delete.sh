#!/bin/sh

kubectl delete -f postgres
kubectl delete -f api
kubectl delete -f adminer
kubectl delete -f ingress
kubectl delete -f ingress/controller/nginx
