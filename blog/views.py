# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from blog.models import Article, Category
from django.db.models.aggregates import Count


def index(request):
    queruset = request.GET.get('tag')
    if queruset:
        article_list = Article.objects.filter(category__name__contains=queruset, Status='Complete').order_by('-id')
    else:
        article_list = Article.objects.order_by('-id').filter(Status='Complete')
    page_robot = Paginator(article_list, 5)
    page_num = request.GET.get('page')
    try:
        article_list = page_robot.page(page_num)
    except EmptyPage:
        article_list = page_robot.page(page_robot.num_pages)
    except PageNotAnInteger:
        article_list = page_robot.page(1)
    category_list = Category.objects.all().annotate(
        num_articles=Count('article')).filter(num_articles__gt=0)
    context = dict()
    context['article_list'] = article_list
    context['category_list'] = category_list
    return render(request, 'index.html', context)


def detail_page(request, page_num):
    context = {}
    article = Article.objects.get(id=page_num)
    context['article'] = article
    return render(request, 'detail.html', context)


def categoty(request):
    return render(request, 'index.html', {})


def about(request):
    context = {}
    return render(request, 'about.html', context)
