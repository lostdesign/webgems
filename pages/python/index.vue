<template lang="pug">
  div
    h1 Python
    .cards
      template(v-for='resource in resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import Card from "../../components/Card";

export default {
  data() {
    return {
      resources: [
        {
          title: "Home of Python",
          desc:
            "Python is a programming language that lets you work quickly and integrate systems more effectively.",
          url: "https://www.python.org/"
        },
        {
          title: "Python 3.7.3 documentation",
          desc: "Documentation for all releaases of Python.",
          url: "https://docs.python.org/3/"
        },
        {
          title: "The Hitchhiker’s Guide to Python!",
          desc:
            "This is a living, breathing guide. This handcrafted guide exists to provide both novice and expert Python developers a best practice handbook to the installation, configuration, and usage of Python on a daily basis.",
          url: "https://docs.python-guide.org/"
        },
        {
          title: "Kaggle - Python",
          desc: "Learn the most important language for Data Science",
          url: "https://www.kaggle.com/learn/python"
        },
        {
          title: "Anaconda",
          desc: "The World's Most Popular Python/R Data Science Platform",
          url: "https://www.anaconda.com/distribution/"
        },
        {
          title: "Real Python Tutorials",
          desc:
            "At Real Python you can learn all things Python from the ground up. Everything from the absolute basics of Python, to web development and web scraping, to data visualization, and beyond.",
          url: "https://realpython.com/"
        },
        {
          title: "Geeks for geeks - Python",
          desc: "Short, clearly written posts with colorful code examples.",
          url: "https://www.geeksforgeeks.org/python-programming-language/"
        },
        {
          title: "Pluralsight - Python",
          desc: "Test your skills and watch a few video courses.",
          url: "https://app.pluralsight.com/paths/skills/Python"
        },
        {
          title: "Pypi",
          desc:
            "Find, install and publish Python packages with the Python Package Index",
          url: "https://pypi.org/"
        },
        {
          title: "Learn Python in y minutes",
          desc: "A mad dash through everything!",
          url: "https://learnxinyminutes.com/docs/python/"
        },
        {
          title: "Boost.Python",
          desc:
            "A C++ library which enables seamless interoperability between C++ and the Python programming language.",
          url:
            "https://www.boost.org/doc/libs/1_70_0/libs/python/doc/html/index.html"
        },
        {
          title: "MongoDB Python Drivers",
          desc: "The database for modern applications",
          url: "https://docs.mongodb.com/ecosystem/drivers/python/"
        },
        {
          title: "A Byte of Python",
          desc:
            "If you like real books ... A complete set of documentation that closely resembles the typesetting of a real book.",
          url: "https://python.swaroopch.com/"
        },
        {
          title: "Requests: HTTP for Humans™",
          desc:
            "Requests is the only Non-GMO HTTP library for Python, safe for human consumption.",
          url: "https://2.python-requests.org/en/master/"
        },
        {
          title: "TensorFlow",
          desc:
            "The core open source library to help you develop and train ML models. TensorFlow is an end-to-end open source platform for machine learning.",
          url: "https://www.tensorflow.org/"
        },
        {
          title: "Think Python",
          desc:
            "Think Python is an introduction to Python programming for beginners. The free O'Reilly book.",
          url: "https://greenteapress.com/wp/think-python/"
        },
        {
          title: "No Starch Press - Automate the Boring Stuff with Python",
          desc:
            "The best part of programming is the triumph of seeing the machine do something useful. Automate the Boring Stuff with Python frames all of programming as these small triumphs; it makes the boring fun.",
          url: "https://nostarch.com/automatestuff"
        },
        {
          title: "Python built-ins worth learning",
          desc:
            "A great list that breaks up topics into 'learn now' and 'wait til later' type categories. By Trey Hunner",
          url: "https://treyhunner.com/2019/05/python-builtins-worth-learning/"
        },
        {
          title: "Qt for Python",
          desc: "Create User Interfaces with Qt for Python",
          url: "https://www.qt.io/qt-for-python"
        },
        {
          title: "Python fun facts.",
          desc: "Python fun facts from JetBrains, maker of the IDE PyCharm",
          url: "https://www.jetbrains.com/lp/devecosystem-2019/python/"
        },
        {
          title: "MicroPython",
          desc: "Using python with microcontrollers.",
          url: "https://micropython.org/"
        },
        {
          title: "Programiz",
          desc: "Learn Python Programming",
          url: "https://www.programiz.com/python-programming"
        },
        {
          title: "Medium - Python",
          desc: "Tools to run Python on Android",
          url:
            "https://towardsdatascience.com/tools-to-run-python-on-android-9060663972b4"
        },
        {
          title: "QPython",
          desc:
            "QPython is a script engine which runs Python programs on android devices. It also can help developers develop android applications.",
          url: "https://www.qpython.com/"
        },
        {
          title: "Medium - Python on Netflix",
          desc:
            "We wanted to share a sampling of how Python is used at Netflix. ",
          url:
            "https://medium.com/netflix-techblog/python-at-netflix-bba45dae649e"
        },
        {
          title: "Python Data Science Handbook",
          desc:
            "This is a book about doing data science with Python, which immediately begs the question: what is data science? The free O'Reilly book.",
          url: "https://jakevdp.github.io/PythonDataScienceHandbook/"
        },
        {
          title: "Data Analysis in Python",
          desc:
            "This site is designed to offer an introduction to Python specifically tailored for social scientists and people doing applied data analysis.",
          url: "http://www.data-analysis-in-python.org/"
        },
        {
          title: "Microsoft - Python",
          desc: "11 Data Science Skills. 1.5 Million Jobs.",
          url:
            "https://academy.microsoft.com/en-us/professional-program/tracks/data-science/"
        },
        {
          title: "Towards Data Science - Machine Learning",
          desc:
            "An “Equation-to-Code” Machine Learning Project Walk-Through in Python",
          url:
            "https://towardsdatascience.com/an-equation-to-code-machine-learning-project-walk-through-in-python-part-1-linear-separable-fd0e19ed2d7"
        },
        {
          title: "Big Data Made Simple",
          desc: "Step by step approach to perform data analysis using Python.",
          url:
            "https://bigdata-madesimple.com/step-by-step-approach-to-perform-data-analysis-using-python/"
        },
        {
          title: "Medium - Python vs R",
          desc:
            "Python vs. R — Choosing the Best Programming Language for Data Science",
          url:
            "https://towardsdatascience.com/python-vs-r-choosing-the-best-programming-languages-for-data-science-b1327f01f6bf"
        },
        {
          title: "Python Data Analysis Library",
          desc:
            "Pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.",
          url: "https://pandas.pydata.org/"
        },
        {
          title: "SciPy",
          desc:
            "SciPy (pronounced “Sigh Pie”) is a Python-based ecosystem of open-source software for mathematics, science, and engineering.",
          url: "https://www.scipy.org/"
        },
        {
          title: "NumPy",
          desc:
            "NumPy is the fundamental package for scientific computing with Python.",
          url: "http://www.numpy.org/"
        },
        {
          title: "Statsmodels",
          desc:
            "Statsmodels is a Python module that provides classes and functions for the estimation of many different statistical models, as well as for conducting statistical tests, and statistical data exploration. ",
          url: "http://www.statsmodels.org/stable/index.html"
        },
        {
          title: "scikit-learn",
          desc: "Machine Learning in Python",
          url: "https://scikit-learn.org/stable/"
        },
        {
          title: "Jupyter",
          desc:
            "The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.",
          url: "https://jupyter.org/"
        },
        {
          title: "Matplotlib",
          desc:
            "Matplotlib is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.",
          url: "https://matplotlib.org/"
        },
        {
          title: "NumFOCUS",
          desc:
            "From Netflix to NASA, researchers use NumFOCUS sponsored projects to solve the most challenging problems. Explore our open source tools by language, features, or industry.",
          url: "https://numfocus.org/sponsored-projects"
        },
        {
          title: "Python Pandemonium",
          desc: "A place to read and write about all things Python.",
          url: "https://medium.com/python-pandemonium/tagged/data-science"
        },
        {
          title: "Pandas for People In A Hurry",
          desc:
            "Pandas is the most popular Python library for data manipulation and data analysis. It is a must know for all data scientists!",
          url:
            "https://towardsdatascience.com/pandas-for-people-in-a-hurry-59d966630ae0"
        },
        {
          title: "PySpark",
          desc: "Python Programming Guide for the API",
          url:
            "https://spark.apache.org/docs/0.9.1/python-programming-guide.html"
        },
        {
          title: "Towards Data Science",
          desc:
            "Sharing concepts, ideas, and codes. IMO the best Data Science Blog.",
          url: "https://towardsdatascience.com/"
        },
        {
          title: "HDF5®",
          desc: "High-performance data management and storage suite",
          url: "https://www.hdfgroup.org/solutions/hdf5/"
        },
        {
          title: "Theano",
          desc:
            "Theano is a Python library that allows you to define, optimize, and evaluate mathematical expressions involving multi-dimensional arrays efficiently.",
          url: "http://deeplearning.net/software/theano/"
        },
        {
          title: "Becoming Human - Languages",
          desc: "Top Programming Languages a Data Scientist Must Master.",
          url:
            "https://becominghuman.ai/top-programming-languages-a-data-scientist-must-master-in-2019-7101a8bc8e16"
        },
        {
          title: "SQLAlchemy",
          desc:
            "SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL.",
          url: "https://www.sqlalchemy.org/"
        }
      ]
    };
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
</style>
